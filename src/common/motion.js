// framer-motion appends translateZ(0) to every transform it writes, which pins a GPU layer
// on each element for good. Pass as `transformTemplate` to release it once the element is at rest.
const DEFAULTS = { scale: 1, scaleX: 1, scaleY: 1, scaleZ: 1 };

function atRest(values) {
    for (const key in values) {
        if (key === "transformPerspective") continue;
        if (parseFloat(values[key]) !== (DEFAULTS[key] ?? 0)) return false;
    }
    return true;
}

// Big elements: keep the layer while moving (cheaper than repainting), drop it when still.
export function releaseLayerAtRest(values, generated) {
    return atRest(values) ? "none" : generated;
}

// Small elements (letters, tags): never pin a layer; repainting them is cheap.
export function noLayer(values, generated) {
    return atRest(values) ? "none" : generated.replace("translateZ(0)", "").trim() || "none";
}

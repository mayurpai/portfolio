// Absolute URL for a file in public/, including the basePath (/portfolio on GitHub Pages).
// Relative URLs break with trailingSlash: during a client-side navigation the new page's images
// resolve against the previous page's URL (e.g. /portfolio/Lafzon-Ka-Jadugar/images/...).
// __NEXT_ROUTER_BASEPATH is inlined by Next into both server and client bundles.
export function asset(path) {
    return `${process.env.__NEXT_ROUTER_BASEPATH || ""}/${path.replace(/^\.?\//, "")}`;
}

import { particleConfigs } from "@/config/particle-config";
import Particles from "react-tsparticles";

const ParticleBackground = () => {
  return <Particles params={particleConfigs}></Particles>;
};

export default ParticleBackground;

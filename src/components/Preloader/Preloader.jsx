import preloader1 from "../../assets/img/prelouder.gif";
import style from "./Preloader.module.css";

const Preloader = () => {
  return (
    <div className={style.imgPreloader}>
      <img src={preloader1} alt="" />
    </div>
  );
};

export default Preloader;

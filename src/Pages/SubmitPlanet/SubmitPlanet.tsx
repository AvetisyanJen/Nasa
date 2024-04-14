import React, { useState } from "react";
import "./SubmitPlanet.scss";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FormData } from "../../types";

const SubmitPlanet: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [t] = useTranslation("global");
  const [formValue, setFormValue] = useState<FormData>({ planetName: "", galaxy: "", diameter: 0, distance: 0, name: "", email: "" });

  const handleValidation = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
    reset()
  };
  
  return (
    <div className="main">
      <h3>{t("submitPlanet.description")}</h3>
      <div className="planet-submit">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder={t("submitPlanet.planetName")}
            {...register("planetName", { required: true, minLength: 16 })}
          />
          {errors.planetName && (
            <span className="error">{t("submitPlanet.nameValid")}</span>
          )}
<select
  className="select"
//   name="galaxy"
  value={formValue.galaxy}
  {...register("galaxy", { required: true })}
  onChange={handleValidation}
>

  <optgroup className=".optgroup">
    <option value="">{t("submitPlanet.galaxyName")}</option>
    <option value="Milky Way">Milky Way</option>
    <option value="Messier 83">Messier 83</option>
    <option value="Black Eye Galaxy">Black Eye Galaxy</option>
    <option value="Pinwheel">Pinwheel</option>
    <option value="Canis Major Dwarf">Canis Major Dwarf</option>
    <option value="Somewhere else...">Somewhere else...</option>
  </optgroup>
</select>



          {errors.galaxy && (
            <span className="error">{t("submitPlanet.galaxyRequired")}</span>
          )}
          <input
            type="number"
            placeholder={t("submitPlanet.diameter")}
            {...register("diameter", { required: true, min: 0 })}
          />
          {errors.diameter && (
            <span className="error">{t("submitPlanet.diameterRequired")}</span>
          )}
          <input
            type="number"
            placeholder={t("submitPlanet.distance")}
            {...register("distance", { required: true, min: 0 })}
          />
          {errors.distance && (
            <span className="error">{t("submitPlanet.distanceRequired")}</span>
          )}
          <input
            type="text"
            placeholder={t("submitPlanet.yourName")}
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="error">{t("submitPlanet.yourNameRequired")}</span>
          )}
          <input
            type="text"
            placeholder="Email"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            })}
          />
          {errors.email && (
            <span className="error">{t("submitPlanet.emailValid")}</span>
          )}
          <button type="submit" className="button">
            {t("submitPlanet.submit")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitPlanet;








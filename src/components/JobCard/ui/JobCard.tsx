import React from "react";
import s from "./JobCard.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames";
import LocationIcon from "@assets/icons/location.svg"
import ExperienceIcon from "@assets/icons/experience.svg"
import { iJob } from "../../../pages/Jobs/ui/Jobs";

interface JobCardProps {
    theme?: string;
    data: iJob;
}

export const JobCard = ({theme = 'default', data}:JobCardProps) => {
  
  return(
    <div className={classNames(s.jobCard, {[s.contrast]: theme === 'contrast'})}>
        <div className={s.job_info}>
            <div className={s.main_info}>
                <p className={s.job_type}>
                    {data.is_trainee ? "Стажировка" : "Работа"}
                </p>
                <p className={s.job_name}>
                    {data.name}
                </p>
                {data.salary > 0 ?
                    <p className={s.salary}>
                        от {data.salary} ₽
                    </p>
                    :
                    <p className={s.salary}>
                        Не оплачивается
                    </p>
                }
            </div>
            <div className={s.company}>
                {data.company}
            </div>
            <div className={s.points_info}>
                <div className={s.point_info}>
                    <img src={LocationIcon}/>
                    <p>{data.region}</p>
                </div>
                <div className={s.point_info}>
                    <img src={ExperienceIcon}/>
                    <p>Опыт {data.experience}</p>
                </div>
            </div>
        </div>
        <div className={s.description_button}>
            <p className={s.description}>
                {data.description}
            </p>
            <a className={s.button}>Подробнее</a>
        </div>
    </div>
 )
}

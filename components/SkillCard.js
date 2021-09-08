import styles from "../styles/components/skillcard.module.scss";

export const SkillCard = props => {
    const {name, icon, subtitle} = props;
    return <div className={"card " + styles.card}>
        <i className={icon + ' ' + styles.icon}/>
        <h4 className={styles.name}>{name}</h4>
        {subtitle && <span>{subtitle}</span>}
    </div>
}

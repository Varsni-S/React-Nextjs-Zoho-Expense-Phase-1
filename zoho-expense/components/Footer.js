import styles from "./Footer.module.css";
export default function Header(){
    return(
        <>
            <div className={styles.footer}>
                <p>Zoho Home | Contact | Security | IPR Complaints | Anti-spam Policy | Terms of Service | Privacy Policy | Cookie Policy | GDPR Compliance | Abuse Policy</p>
                <p>&copy;2021, Zoho Corportion Pvt. Ltd. All Rights Reversed.</p>
            </div>
        </>
    )
}
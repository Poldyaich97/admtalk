/* eslint-disable react/no-unknown-property */

import React from "react";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.logo}>
                        <a href="/kiosks"><svg _ngcontent-rix-c118="" height="20" width="32" xmlns="http://www.w3.org/2000/svg">
                            <path _ngcontent-rix-c118="" clipRule="evenodd" d="M13.43 6.1c-.25.23-.43.6-.43 1.11 0 .23.05.44.14.63a.6.6 0 01-1.08.52 2.67 2.67 0 01-.26-1.15c0-.81.29-1.5.8-2a2.8 2.8 0 011.94-.71c1.02 0 1.9.54 2.38 1.35a.6.6 0 11-1.04.6 1.55 1.55 0 00-1.34-.75c-.47 0-.85.15-1.11.4z" fillRule="evenodd"></path><path _ngcontent-rix-c118="" clipRule="evenodd" d="M0 3.65A3.65 3.65 0 013.65 0h13.7A3.65 3.65 0 0121 3.65V11a2.65 2.65 0 01-2.65 2.65h-1a.65.65 0 110-1.3h1c.75 0 1.35-.6 1.35-1.35V3.65c0-1.3-1.05-2.35-2.35-2.35H3.65A2.35 2.35 0 001.3 3.65v12.7c0 1.3 1.05 2.35 2.35 2.35h13.7c1.3 0 2.35-1.05 2.35-2.35V15a.65.65 0 111.3 0v1.35A3.65 3.65 0 0117.35 20H3.65A3.65 3.65 0 010 16.35V3.65zM29 1.05c1.2-.97 3-.1 3 1.45v14.87a1.85 1.85 0 01-3.06 1.4l-5.03-4.14a2.65 2.65 0 01-.91-2V7c0-.8.37-1.57 1-2.07l5-3.88zm1.7 1.45a.55.55 0 00-.9-.43l-5 3.88c-.31.25-.5.64-.5 1.05v5.63c0 .39.17.76.47 1.02l5.02 4.14c.36.3.91.05.91-.42V2.5z" fillRule="evenodd"></path>
                        </svg></a>
                    </div>
                </div>
            </div>
        </header>
    );
}

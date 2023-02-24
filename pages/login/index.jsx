/* eslint-disable no-unused-vars */
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import Link from 'next/link';
import { useState } from 'react';
import styles from './style.module.scss';

export default function Login() {
  const [isError, setError] = useState(false);
  return (
    <>
      <div className={styles.loginHeader}>
        <div className={styles.logo}>
          <Image src="/images/logo.svg" alt="not-found" />
        </div>
      </div>

      <div className={styles.loginMain}>
        <div className={styles.loginFormContainer}>
          <div className={styles.loginFormCols}>
            <div className={styles.loginLogo}>
              <Image src="/images/logo.svg" alt="not found" />
            </div>
            <Form className={styles.loginForm}>
              <Form.Group className={styles.loginFormGroup}>
                <span className={styles.loginIcons}>
                  <Image src="/images/icons/email.svg" alt="not found" />
                </span>
                <Form.Control type="email" placeholder="Email / Mobile" />
                {isError && (
                  <span className="text-error">
                    Please enter correct email.
                  </span>
                )}
              </Form.Group>

              <Form.Group className={styles.loginFormGroup}>
                <span className={styles.loginIcons}>
                  <Image src="/images/icons/password.svg" alt="not found" />
                </span>
                <Form.Control type="password" placeholder="Password" />
                <Button className={styles.eyeIcon}>
                  <AiOutlineEyeInvisible />
                </Button>
                {isError && (
                  <span className="text-error">
                    Please enter correct email.
                  </span>
                )}
              </Form.Group>
              <div className="d-flex justify-content-center">
                <Link href="/" className={styles.submitBtn}>
                  Login
                </Link>
              </div>
            </Form>

            <div className={styles.forgotPass}>
              <Link href="/">Forgot Password?</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

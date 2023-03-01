/* eslint-disable no-unused-vars */
import { useRouter } from 'next/navigation';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import Link from 'next/link';
import { useState } from 'react';
import styles from './style.module.scss';
import {
  useLoginMutation,
  useEncryptMutation,
} from '../../redux/api/endpoints/auth';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState('');
  const [login] = useLoginMutation();
  const [encrypt] = useEncryptMutation();
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  const loginHandler = async (e) => {
    e.preventDefault();
    if ((formData.email || formData.password) === '' || status === 'Loading...')
      return;
    if (!validateEmail(formData.email)) {
      setStatus('username / phone');
      return;
    }
    setStatus('Loading...');
    try {
      const encryptCredentials = await encrypt({
        string: `${formData.email}:${formData.password}`,
      });
      if (encryptCredentials?.data?.code === 200) {
        const userData = await login({
          credentials: encryptCredentials?.data?.data,
        });
        if ([401, 403, 404].includes(userData?.data?.code)) {
          setStatus(userData?.data?.message || '');
        } else {
          setStatus('');
          router.push('/homepage');
        }
      } else {
        setStatus(encryptCredentials?.data?.message || '');
      }
    } catch (err) {
      setStatus('Something went wrong!');
    }
  };
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
            <Form onSubmit={loginHandler} className={styles.loginForm}>
              <Form.Group className={styles.loginFormGroup}>
                <span className={styles.loginIcons}>
                  <Image src="/images/icons/email.svg" alt="not found" />
                </span>
                <Form.Control
                  type="email"
                  placeholder="Email / Mobile"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {status?.includes('Username') && (
                  <span className="text-error">
                    Please enter correct email.
                  </span>
                )}
              </Form.Group>

              <Form.Group className={styles.loginFormGroup}>
                <span className={styles.loginIcons}>
                  <Image src="/images/icons/password.svg" alt="not found" />
                </span>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <Button
                  onClick={() => setShowPassword(!showPassword)}
                  className={styles.eyeIcon}
                >
                  {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </Button>
                {status?.includes('Password') && (
                  <span className="text-error">
                    Please enter correct password
                  </span>
                )}
              </Form.Group>
              <div className="d-flex justify-content-center">
                <Button
                  variant="primary"
                  type="submit"
                  className={styles.submitBtn}
                >
                  {status === 'Loading...' ? 'Loading...' : 'Login'}
                </Button>
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

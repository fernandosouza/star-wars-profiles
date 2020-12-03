import styled from "styled-components";
import { Formik, FormikErrors } from "formik";
import Head from "next/head";

function validateEmail(email: string) {
  if (!email) {
    return "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    return "Invalid email address";
  }
  return null;
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

interface UserCredentials {
  email: string;
  password: string;
}

export default function Signup() {
  const credentials: UserCredentials = {
    email: "",
    password: "",
  };

  return (
    <div>
      <Head>
        <title>Sign up</title>
      </Head>

      <main>
        <h1>Sign up</h1>

        <section>
          <Formik
            initialValues={credentials}
            validate={(values) => {
              const errors: FormikErrors<UserCredentials> = {};
              errors.email = validateEmail(values.email);
              errors.password = !values.password ? "Required" : null;

              console.log(errors);

              if (!errors.password || !errors.password) {
                return null;
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              fetch('http://localhost:8080/https://fe-case-study.vercel.app/api/', {
                method: 'POST',
                body: JSON.stringify(values),
                mode: 'no-cors',
              }).then((resp) => {
                resp.json();
              }).then(data => {
                console.log(data);
                setSubmitting(false);
              })
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <Form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && errors.email}
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {errors.password && touched.password && errors.password}
                </div>
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </section>
      </main>

      <footer></footer>
    </div>
  );
}

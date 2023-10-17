"use client";
import { useState } from "react";

import Container from "../../components/Layout/Container";
import { Checkbox } from "@nextui-org/react";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import Link from "../../components/Link";

export default function Page() {
  const [isLoad, setIsLoad] = useState(false);
  return (
    <Container>
      <form
        onSubmit={() => setIsLoad(true)}
        method="post"
        className="max-w-md p-4 mx-auto my-auto border rounded-lg"
      >
        <h1 className="text-center text-lg font-black my-2">Login</h1>
        <Input
          autoFocus
          label="Email"
          type="email"
          placeholder="Introduce tu correo electrónico"
          isRequired
          isDisabled={isLoad}
        />
        <Input
          label="Password"
          placeholder="Introduce tu contraseña"
          type="password"
          isRequired
          Disabled={isLoad}
        />
        <div className="flex py-2  px-1 justify-between">
          <Checkbox
            classNames={{
              label: "text-small",
            }}
            className="col"
            color="default"
          >
            Recuérdame
          </Checkbox>
          <Link redirect="/forgetPassword">¿Olvidaste tu contraseña?</Link>
        </div>

        <Button type="submit" isLoading={isLoad}>
          Login
        </Button>

        <div className="text-center my-5 text-sm">
          <p>
            ¿Aún no tienes cuenta? <Link redirect="/registro">Registrate</Link>
          </p>
        </div>
      </form>
    </Container>
  );
}

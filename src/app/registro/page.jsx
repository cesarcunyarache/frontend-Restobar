"use client";
import Container from "../../components/Layout/Container";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import Link from "../../components/Link";

export default function Registro() {
  return (
    <Container>
      <form
        onSubmit={() => alert("enviando")}
        method="post"
        className="max-w-md p-4 mx-auto my-auto border rounded-lg"
      >
        <h1 className="text-center text-lg font-black my-2">Registro</h1>
        <Input autoFocus label="Dni" placeholder=" " isRequired />
        <Input label="Nombres" placeholder=" " isRequired />
        <Input label="Apellidos" placeholder=" " isRequired />
        <Input label="Email" type="email" placeholder=" " isRequired />
        <Input label="Password" placeholder=" " type="password" isRequired />
        <Input
          label="Confirm Password"
          placeholder=" "
          type="password"
          isRequired
        />
        <Button type="submit">Registar</Button>

        <div className="text-center my-5 text-sm">
          <p>
            ¿Ya tienes una cuenta? <Link redirect="/login">Iniciar Sesión</Link>
          </p>
        </div>
      </form>
    </Container>
  );
}

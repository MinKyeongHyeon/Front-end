import { useActionState } from "react";

export default function Login2() {
  const [state, formAction, isPending] = useActionState(
    async (previousState, formData) => {
      const userName = formData.get("userName");
      const password = formData.get("password");
      try{
        const response = await fetch("http://localhost:3001/login",
          {
            method: "POST",
            headers: {"Content-type":"application/json"},
            body: JSON.stringify({userName, password}),
          }
        )
        if (!response.ok)throw new Error("Error");
        const res = await response.json();
      }
    }
  );
}

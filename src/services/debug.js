

function debugFunction(req) {

  console.log(req.decoded);
  
  if (req.decoded) {
    const { id, name, email, role, iat, exp } = req.decoded;
    const issuedAt = new Date(iat * 1000);
    const expiration = new Date(exp * 1000);
    console.log(`id: ${id} | Nome: ${name} | Email: ${email} | Role: ${role}`);
    console.log(`Data de emissão: ${issuedAt}`);
    console.log(`Data de expiração: ${expiration}`);
  } else {
    console.log("Decoded não existe");
  }
}

export { debugFunction };
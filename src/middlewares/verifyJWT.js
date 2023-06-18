import * as jwt from 'jsonwebtoken';

const roleLevel = {
  "Master":0,
  "Admin": 1,
  "Personal": 2,
  "User": 3
}

const SECRETKEY = "superSecretLevel100";

function verifyJWT(requiredRole) {
  return function(req, res, next) {
    const token = req.headers['x-access-token'];  
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });

    jwt.verify(token, SECRETKEY, function (err, decoded) {
      console.log(err)
      if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });

      const userRoleLevel = roleLevel[decoded.role];
      const requiredRoleLevel = roleLevel[requiredRole];

      // Verificar se o nível de acesso do usuário é maior ou igual ao nível de acesso necessário
      if (userRoleLevel > requiredRoleLevel) {
        return res.status(403).json({ message: `Access denied for ${decoded.role}. Only ${requiredRole} role or higher is allowed.` });
      }

      // Se tudo estiver ok, salva no request para uso posterior
      req.decoded = decoded;    
      next();
    });
  };
}

export { verifyJWT };


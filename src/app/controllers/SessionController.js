import jwt from 'jsonwebtoken'
import User from '../models/User'
import auth from '../../config/auth'

class SessionController {
    async store(req, res) {
        const { email, password } = req.body

        const user = await User.findOne({ where: { email } })

        if (!user) {
            return res.status(401).json({ error: 'Usuario não encontrado' })
        }

        if (!(await user.checkPassword(password))) {
            return res.status(401).json({ error: 'Senha Incorreta' })
        }

        const { id, name, address } = user

        return res.json({
            user: {
                id,
                name,
                address
            },
            token: jwt.sign({ id }, auth.secret, {
                expiresIn: auth.expiresIn,
            }),
        })
    }
}

export default new SessionController()
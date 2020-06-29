import * as Yup from 'Yup'
import User from '../models/User'
// import File from '../models/File'

class UserController {
	async store(req, res) {
		const schema = Yup.object().shape({
			name: Yup.string().required(),
			address: Yup.string()
				.required(),
			email: Yup.string()
				.email()
				.required(),
			password: Yup.string()
				.required()
				.min(6),
		});

		schema.validate(req.body, { abortEarly: false }).catch(e => {
			return res.status(400).json(e.errors);
		});
		//Validação de email
		const userExists = await User.findOne({ where: { email: req.body.email } });
		if (userExists) {
			return res.status(400).json({ error: 'E-mail já existe!' });
		}
		const { id, name, address, email, provider } = await User.create(req.body);
		return res.json({ id, name, address, email, provider });
	}

	async update(req, res) {
		const { email, oldPassword } = req.body;
	
		const user = await User.findByPk(req.userId);
	
		if (email && email !== user.email) {
		  const userExists = await User.findOne({
			where: { email },
		  });
	
		  if (userExists) {
			return res.status(400).json({ error: 'User already exists.' });
		  }
		}
	
		if (oldPassword && !(await user.checkPassword(oldPassword))) {
		  return res.status(401).json({ error: 'Password does not match' });
		}
	
		const {alterado} = await user.update(req.body);
	
		return res.json(alterado);
	  }
	}
	

export default new UserController()
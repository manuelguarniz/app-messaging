import { required, minLength, alphaNumeric, maxLength } from '@rxweb/reactive-form-validators';
import { Room } from './room';

export class RoomModel implements Room {

  @required({ message: 'Este campo es requerido.' })
  @minLength({ value: 3, message: 'Longitud mínima es de 3 caracteres.' })
  @maxLength({ value: 100, message: 'Longitud máxima es de 10 caracteres.' })
  @alphaNumeric({ allowWhiteSpace: true, message: 'Este campo tiene caracteres inválidos' })
  name: string;

  createAt: string;

  timestamp: Date;
  presenter: string;
  initialDate: Date;
  isPublic: boolean;
}

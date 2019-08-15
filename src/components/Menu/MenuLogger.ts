import {injectable} from 'inversify';

@injectable()
export class MenuLogger {
    log(message: string) {
        console.log(`${message} from MenuLogger`);
    }
}

import app from './app';
import { consola } from 'consola'
import ck from 'chalk';

export const serverInfo = {
    port: Number(process.env.PORT || 3000)
}

app.listen({ port: serverInfo.port }, () => {
    consola.success(ck.green(`${ck.blue.underline("Backend")} is running on port`))
    consola.log(ck.magenta(`➝ ${ck.underline("Server initialized. Ready to handle requests!")}`))
    consola.log(ck.green(`⤿ ${ck.underline("Access it at")} http://127.0.0.1:`))
});
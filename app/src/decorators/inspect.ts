export function inspect() {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: Array<any>) {
            //console.log(`---Metodo ${propertyKey}`);
            //console.log(`------ Parâmetros: ${JSON.stringify(args)}`);

            const retorno = metodoOriginal.apply(this, args);
            //console.log(`------retorno: ${JSON.stringify(retorno)}`);

            return retorno;
        }

        return descriptor
    }
}
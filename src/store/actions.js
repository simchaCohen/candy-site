export const actions = new Proxy(
    {},
    {
        get: function (target, prop) {
            if (target[prop] === undefined)
                return function (args) {
                    return {
                        type: prop,//SET_COMPANY_NAME
                        payload: args
                    };////     return {type:"SET_COMPANY_NAME",payload:company_name}

                };

            else return target[prop];
        }
    }
);

/*@ngInject*/
export default class {
    constructor() {}
    example() {
        return new Promise((resolve, reject) => {
                if (navigator.appVersion.indexOf("Win") != -1) {
                    return resolve(`Welcome Windows user!`);
                }
                if (navigator.appVersion.indexOf("Mac") != -1) {
                    return resolve(`Welcome MacOS user!`);
                }
                if (navigator.appVersion.indexOf("X11") != -1) {
                    return resolve(`Welcome UNIX user!`);
                }
                if (navigator.appVersion.indexOf("Linux") != -1) {
                    return resolve(`Welcome Linux user!`);
                }
                reject();
            })
            .then(title => title)
            .catch(() => `I don't know who you are :(`);
    }
}

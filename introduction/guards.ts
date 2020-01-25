function strip(x: string | number): string | number {
    return typeof x === 'number' ? x.toFixed(2) : x.trim();
}

class MyResponse {
    header: string = 'response header';
    result: string = 'response result';
}

class MyError {
    header: string = 'error header';
    errorMessage: string = 'error message';
}

function handle(x: MyResponse | MyError) {
    return x instanceof MyResponse
        ? {info: this.header + '\n' + this.result}
        : {info: this.header + '\n' + this.errorMessage}
}




type alertType = 'success' | 'danger'| 'warning';

function setAlertType(type: alertType): void {}

setAlertType('success');
setAlertType('warning');
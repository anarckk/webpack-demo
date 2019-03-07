import * as _ from 'lodash';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}

document.body.appendChild(component());

interval(1000).pipe(take(3)).subscribe(i => {
    const promise = new Promise(resolve => {
        setTimeout(() => {
            resolve('sb12345');
        }, 100);
    });
    promise.then(data => {
        console.log(i + '第一个链式调用', data);
        return Promise.resolve({a: 'sb'});
    }).then(data => {
        console.log(i + '第二个链式调用', data);
    });
});


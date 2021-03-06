/*takeEvery=>负责监听  put=>派发动作   all=>防止阻塞，类似promise.all，统一监听 call=>告诉saga，执行delay，并传入1000作为参数
* saga分为三类 1、rootsaga 2、监听saga 3、worker干活的saga
*
* */
import {take,put,takeEvery,call} from "./redux-saga/effects";
import * as types from "./store/action-types";


//步骤2 验证takeEvery、call
const delay = ms=>new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve()
    },ms)
});
function* add() {
    yield call(delay,1000);
    yield put({type:types.ADD});
}
export function* rootSaga() {
    //表示等待一个动作的发生
    //yield {type:"take",actionType:"ADD_ASYNC"}
    yield takeEvery(types.ADD_ASYNC,add);
    console.log("after takeEvery");
}





/* 步骤1 验证take、put可以正常调用, 已成功调用
export function* rootSaga() {
    //表示等待一个动作的发生
    //yield {type:"take",actionType:"ADD_ASYNC"}
   let action = yield take(types.ADD_ASYNC);
    console.log(action);
    yield put({type:types.ADD});

}
*/
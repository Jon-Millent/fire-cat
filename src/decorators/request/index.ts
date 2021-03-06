import {FireCatDecorator, getDecoratorStoreMetaControllerData} from '../../decorator'
import {InterceptorType} from "../../types";

function registerRouterPut(target, propertyKey, decorator, path: string, method: string) {
  try {
    const store = getDecoratorStoreMetaControllerData(target)
    if (store) {
      store.appendRouter(decorator, path, method, propertyKey)
    }
  } catch (e) {
    //
  }
}

export function Get(path: string) {
  return FireCatDecorator.registerImplement((target, propertyKey, decorator)=> {
    registerRouterPut(target, propertyKey, decorator, path, 'get')
  })
}

export function Post(path: string) {
  return FireCatDecorator.registerImplement((target, propertyKey, decorator)=> {
    registerRouterPut(target, propertyKey, decorator, path, 'post')
  })
}

export function Request() {
  return FireCatDecorator.registerInterceptor((ctx, next)=> {
    if (ctx.method == 'GET') {
      ctx.request.body = ctx.request.query
    }
    next()
  }, InterceptorType.WRAP)
}
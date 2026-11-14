
import * as QGpzLWpvZGEvY29yZQ from '@js-joda/core';
import * as d2FzbTpqcy1zdHJpbmc from './Starfait-starfait-runner-web.js-builtins.mjs';

const wasmJsTag = WebAssembly.JSTag;
const wasmTag = wasmJsTag ?? new WebAssembly.Tag({ parameters: ['externref'] });

// Placed here to give access to it from externals (js_code)
let wasmExports;

if (typeof process !== 'undefined' && process.release.name === 'node') {
    function doNotUseRequire() {
        throw new Error("Do not use top-level require. Prefer to use JS import or define your own require instead. Read more: https://kotl.in/r9txlt")
    }

    var require = new Proxy((function() {}), {
        apply(target, thisArg, argumentsList) {
            if (globalThis.require != null) {
                return globalThis.require.apply(thisArg, argumentsList);
            } else {
                doNotUseRequire();
            }
        },
        get(target, prop, receiver) {
            if (globalThis.require != null) {
                return Reflect.get(globalThis.require, prop);
            } else {
                doNotUseRequire();
            }
        },
    });
}

export function setWasmExports(exports) {
    wasmExports = exports;
}

const _ref_QGpzLWpvZGEvY29yZQ_ = QGpzLWpvZGEvY29yZQ;

const cachedJsObjects = new WeakMap();
function getCachedJsObject(ref, ifNotCached) {
    if (typeof ref !== 'object' && typeof ref !== 'function') return ifNotCached;
    const cached = cachedJsObjects.get(ref);
    if (cached !== void 0) return cached;
    cachedJsObjects.set(ref, ifNotCached);
    return ifNotCached;
}

const js_code = {
    'kotlin.createJsError' : (message, cause) => new Error(message, { cause }),
    'kotlin.wasm.internal.jsThrow' : wasmTag === wasmJsTag ? (e) => { throw e; } : () => {},
    'kotlin.wasm.internal.getJsEmptyString' : () => '',
    'kotlin.wasm.internal.getJsTrue' : () => true,
    'kotlin.wasm.internal.getJsFalse' : () => false,
    'kotlin.wasm.internal.intToExternref' : (x) => x,
    'kotlin.wasm.internal.externrefToBoolean' : (ref) => Boolean(ref),
    'kotlin.wasm.internal.externrefToString' : (ref) => String(ref),
    'kotlin.wasm.internal.externrefEquals' : (lhs, rhs) => lhs === rhs,
    'kotlin.wasm.internal.externrefHashCode' : 
    (() => {
    const dataView = new DataView(new ArrayBuffer(8));
    function numberHashCode(obj) {
        if ((obj | 0) === obj) {
            return obj | 0;
        } else {
            dataView.setFloat64(0, obj, true);
            return (dataView.getInt32(0, true) * 31 | 0) + dataView.getInt32(4, true) | 0;
        }
    }

    const hashCodes = new WeakMap();
    function getObjectHashCode(obj) {
        const res = hashCodes.get(obj);
        if (res === undefined) {
            const POW_2_32 = 4294967296;
            const hash = (Math.random() * POW_2_32) | 0;
            hashCodes.set(obj, hash);
            return hash;
        }
        return res;
    }

    function getStringHashCode(str) {
        var hash = 0;
        for (var i = 0; i < str.length; i++) {
            var code  = str.charCodeAt(i);
            hash  = (hash * 31 + code) | 0;
        }
        return hash;
    }

    return (obj) => {
        if (obj == null) {
            return 0;
        }
        switch (typeof obj) {
            case "object":
            case "function":
                return getObjectHashCode(obj);
            case "number":
                return numberHashCode(obj);
            case "boolean":
                return obj ? 1231 : 1237;
            default:
                return getStringHashCode(String(obj)); 
        }
    }
    })(),
    'kotlin.wasm.internal.isNullish' : (ref) => ref == null,
    'kotlin.wasm.internal.kotlinUIntToJsNumberUnsafe' : (x) => x >>> 0,
    'kotlin.wasm.internal.kotlinULongToJsBigIntUnsafe' : (x) => x & 0xFFFFFFFFFFFFFFFFn,
    'kotlin.wasm.internal.newJsArray' : () => [],
    'kotlin.wasm.internal.jsArrayPush' : (array, element) => { array.push(element); },
    'kotlin.wasm.internal.getCachedJsObject_$external_fun' : (p0, p1) => getCachedJsObject(p0, p1),
    'kotlin.wasm.internal.utoa32_$external_fun' : (p0) => String(p0),
    'kotlin.wasm.internal.utoa64_$external_fun' : (p0) => String(p0),
    'kotlin.wasm.internal.itoa32_$external_fun' : (p0) => String(p0),
    'kotlin.wasm.internal.itoa64_$external_fun' : (p0) => String(p0),
    'kotlin.io.printlnImpl' : (message) => console.log(message),
    'kotlin.io.printImpl' : (message) => typeof write !== 'undefined' ? write(message) : console.log(message),
    'kotlin.js.jsArrayGet' : (array, index) => array[index],
    'kotlin.js.length_$external_prop_getter' : (_this) => _this.length,
    'kotlin.js.JsBoolean_$external_class_instanceof' : (x) => typeof x === 'boolean',
    'kotlin.js.JsBoolean_$external_class_get' : () => JsBoolean,
    'kotlin.js.stackPlaceHolder_js_code' : () => (''),
    'kotlin.js.message_$external_prop_getter' : (_this) => _this.message,
    'kotlin.js.name_$external_prop_setter' : (_this, v) => _this.name = v,
    'kotlin.js.stack_$external_prop_getter' : (_this) => _this.stack,
    'kotlin.js.kotlinException_$external_prop_getter' : (_this) => _this.kotlinException,
    'kotlin.js.kotlinException_$external_prop_setter' : (_this, v) => _this.kotlinException = v,
    'kotlin.js.JsError_$external_class_instanceof' : (x) => x instanceof Error,
    'kotlin.js.JsString_$external_class_instanceof' : (x) => typeof x === 'string',
    'kotlin.js.JsString_$external_class_get' : () => JsString,
    'kotlin.random.initialSeed' : () => ((Math.random() * Math.pow(2, 32)) | 0),
    'kotlin.wasm.internal.getJsClassName' : (jsKlass) => jsKlass.name,
    'kotlin.wasm.internal.getConstructor' : (obj) => obj.constructor,
    'kotlin.time.Date_$external_fun' : () => new Date(),
    'kotlin.time.getTime_$external_fun' : (_this, ) => _this.getTime(),
    'kotlin.time.tryGetPerformance' : () => typeof globalThis !== 'undefined' && typeof globalThis.performance !== 'undefined' ? globalThis.performance : null,
    'kotlin.time.getPerformanceNow' : (performance) => performance.now(),
    'kotlin.time.dateNow' : () => Date.now(),
    'kotlinx.datetime.internal.Date_$external_fun' : (p0) => new Date(p0),
    'kotlinx.datetime.internal.getTimezoneOffset_$external_fun' : (_this, ) => _this.getTimezoneOffset(),
    'kotlinx.datetime.internal.JSJoda.ZoneRulesProvider_$external_object_getInstance' : () => _ref_QGpzLWpvZGEvY29yZQ_.ZoneRulesProvider,
    'kotlinx.datetime.internal.JSJoda.id_$external_fun' : (_this, ) => _this.id(),
    'kotlinx.datetime.internal.JSJoda.systemDefault_$external_fun' : (_this, ) => _this.systemDefault(),
    'kotlinx.datetime.internal.JSJoda.Companion_$external_object_getInstance' : () => _ref_QGpzLWpvZGEvY29yZQ_.ZoneId,
    'kotlinx.datetime.internal.withCaughtJsException' : (body) => {
        try {
            body();
            return null;
        } catch(e) {
            return e;
        }
    },
    'kotlinx.datetime.internal.__convertKotlinClosureToJsClosure_0' : (f, trampoline) => getCachedJsObject(f, () => trampoline(f, )),
    'kotlinx.datetime.internal.getExceptionMessage' : (jsException) => jsException.message,
    'kotlinx.datetime.internal.getZones' : (rulesProvider) => rulesProvider.getTzdbData().zones,
    'kotlinx.datetime.internal.getLinks' : (rulesProvider) => rulesProvider.getTzdbData().links,
    'js.objects.unsafeJso' : () => ({}),
    'kotlinx.coroutines.tryGetProcess' : () => (typeof(process) !== 'undefined' && typeof(process.nextTick) === 'function') ? process : null,
    'kotlinx.coroutines.tryGetWindow' : () => (typeof(window) !== 'undefined' && window != null && typeof(window.addEventListener) === 'function') ? window : null,
    'kotlinx.coroutines.nextTick_$external_fun' : (_this, p0) => _this.nextTick(p0),
    'kotlinx.coroutines.createScheduleMessagePoster' : (process) => () => Promise.resolve(0).then(process),
    'kotlinx.coroutines.__callJsClosure_(()->Unit)' : (f, ) => f(),
    'kotlinx.coroutines.createRescheduleMessagePoster' : (window) => () => window.postMessage('dispatchCoroutine', '*'),
    'kotlinx.coroutines.subscribeToWindowMessages' : (window, process) => {
        const handler = (event) => {
            if (event.source == window && event.data == 'dispatchCoroutine') {
                event.stopPropagation();
                process();
            }
        }
        window.addEventListener('message', handler, true);
    },
    'kotlinx.coroutines.setTimeout' : (window, handler, timeout) => window.setTimeout(handler, timeout),
    'kotlinx.coroutines.clearTimeout' : (handle) => { if (typeof clearTimeout !== 'undefined') clearTimeout(handle); },
    'kotlinx.coroutines.clearTimeout_$external_fun' : (_this, p0) => _this.clearTimeout(p0),
    'kotlinx.coroutines.setTimeout_$external_fun' : (p0, p1) => setTimeout(p0, p1),
    'kotlinx.coroutines.internal.throwAsyncJsError' : (message, className, stack) => { 
            var error = new Error();
            error.message = message;
            error.name = className;
            error.stack = stack;
            if (typeof globalThis.reportError === 'function') {
                // Up-to-date browsers and some non-browser JS runtimes (Deno, Bun)
                globalThis.reportError(error);
            } else {
                // Fallback for old browsers (pre-2022), Node.js
                setTimeout(function () { throw error }, 0);
            }
         },
    'js.array.set_$external_fun' : (_this, i, value) => _this[i] = value,
    'js.array.of_$external_fun' : (_this, p0) => _this.of(...p0),
    'js.array.Companion_$external_object_getInstance' : () => Array,
    'js.errors.JsError_$external_class_instanceof' : (x) => x instanceof Error,
    'js.typedarrays.Uint8Array_$external_fun' : (p0, p1, p2, isDefault0, isDefault1) => new Uint8Array(p0, isDefault0 ? undefined : p1, isDefault1 ? undefined : p2, ),
    'js.typedarrays.buffer_$external_prop_getter' : (_this) => _this.buffer,
    'js.typedarrays.Uint8Array_$external_fun_1' : (p0) => new Uint8Array(p0),
    'js.buffer.byteLength_$external_prop_getter' : (_this) => _this.byteLength,
    'js.collections.values_$external_fun' : (_this, ) => _this.values(),
    'js.errors.name_$external_prop_getter' : (_this) => _this.name,
    'js.iterable.next_$external_fun' : (_this, ) => _this.next(),
    'js.iterable.done_$external_prop_getter' : (_this) => _this.done,
    'js.iterable.value_$external_prop_getter' : (_this) => _this.value,
    'js.promise.Promise_$external_fun' : (p0) => new Promise(p0),
    'js.promise.__convertKotlinClosureToJsClosure_2' : (f, trampoline) => getCachedJsObject(f, (p0, p1) => trampoline(f, p0, p1)),
    'js.promise.Promise_$external_class_instanceof' : (x) => x instanceof Promise,
    'js.promise.Promise_$external_class_get' : () => Promise,
    'js.promise.__convertKotlinClosureToJsClosure_1' : (f, trampoline) => getCachedJsObject(f, (p0) => trampoline(f, p0)),
    'js.promise.then_$external_fun' : (_this, p0, p1) => _this.then(p0, p1),
    'js.promise.invoke_$external_fun' : (_this, p0) => _this(p0),
    'js.promise.invoke_$external_fun_1' : (_this, p0) => _this(p0),
    'js.reflect.get_$external_fun' : (_this, p0, p1) => _this.get(p0, p1),
    'js.reflect.get_$external_fun_1' : (_this, p0, p1) => _this.get(p0, p1),
    'js.reflect.set_$external_fun' : (_this, p0, p1, p2) => _this.set(p0, p1, p2),
    'js.reflect.Reflect_$external_object_getInstance' : () => Reflect,
    'js.reflect.internal.bind_$external_fun' : (_this, p0) => _this.bind(p0),
    'js.reflect.internal.__callJsClosure_(()->Js?)' : (f, ) => f(),
    'js.symbol.asyncDispose_$external_object_getInstance' : () => Symbol.asyncDispose,
    'js.symbol.asyncIterator_$external_object_getInstance' : () => Symbol.asyncIterator,
    'js.symbol.Symbol_$external_fun' : (p0, isDefault0) => Symbol(isDefault0 ? undefined : p0, ),
    'web.blob.Blob_$external_fun' : (p0, p1, isDefault0, isDefault1) => new Blob(isDefault0 ? undefined : p0, isDefault1 ? undefined : p1, ),
    'web.blob.arrayBufferAsync_$external_fun' : (_this, ) => _this.arrayBuffer(),
    'web.blob.type_$external_prop_setter' : (_this, v) => _this.type = v,
    'web.file.name_$external_prop_getter' : (_this) => _this.name,
    'web.images.height_$external_prop_getter' : (_this) => _this.height,
    'web.images.width_$external_prop_getter' : (_this) => _this.width,
    'web.images.createImageBitmapAsync_$external_fun' : (p0, p1, isDefault0) => createImageBitmap(p0, isDefault0 ? undefined : p1, ),
    'web.streams.closeAsync_$external_fun' : (_this, ) => _this.close(),
    'web.audio.duration_$external_prop_getter' : (_this) => _this.duration,
    'web.audio.AudioBuffer_$external_class_instanceof' : (x) => x instanceof AudioBuffer,
    'web.audio.AudioBuffer_$external_class_get' : () => AudioBuffer,
    'web.audio.buffer_$external_prop_setter' : (_this, v) => _this.buffer = v,
    'web.audio.loop_$external_prop_setter' : (_this, v) => _this.loop = v,
    'web.audio.playbackRate_$external_prop_getter' : (_this) => _this.playbackRate,
    'web.audio.start_$external_fun' : (_this, p0, p1, p2, isDefault0, isDefault1, isDefault2) => _this.start(isDefault0 ? undefined : p0, isDefault1 ? undefined : p1, isDefault2 ? undefined : p2, ),
    'web.audio.AudioContext_$external_fun' : (p0, isDefault0) => new AudioContext(isDefault0 ? undefined : p0, ),
    'web.audio.resumeAsync_$external_fun' : (_this, ) => _this.resume(),
    'web.audio.connect_$external_fun' : (_this, p0, p1, p2, isDefault0, isDefault1) => _this.connect(p0, isDefault0 ? undefined : p1, isDefault1 ? undefined : p2, ),
    'web.audio.disconnect_$external_fun' : (_this, ) => _this.disconnect(),
    'web.audio.value_$external_prop_setter' : (_this, v) => _this.value = v,
    'web.audio.stop_$external_fun' : (_this, p0, isDefault0) => _this.stop(isDefault0 ? undefined : p0, ),
    'web.audio.currentTime_$external_prop_getter' : (_this) => _this.currentTime,
    'web.audio.destination_$external_prop_getter' : (_this) => _this.destination,
    'web.audio.createBufferSource_$external_fun' : (_this, ) => _this.createBufferSource(),
    'web.audio.createGain_$external_fun' : (_this, ) => _this.createGain(),
    'web.audio.decodeAudioDataAsync_$external_fun' : (_this, p0) => _this.decodeAudioData(p0),
    'web.audio.gain_$external_prop_getter' : (_this) => _this.gain,
    'web.fs.getDirectoryHandleAsync_$external_fun' : (_this, p0, p1, isDefault0) => _this.getDirectoryHandle(p0, isDefault0 ? undefined : p1, ),
    'web.fs.getFileHandleAsync_$external_fun' : (_this, p0, p1, isDefault0) => _this.getFileHandle(p0, isDefault0 ? undefined : p1, ),
    'web.fs.createWritableAsync_$external_fun' : (_this, p0, isDefault0) => _this.createWritable(isDefault0 ? undefined : p0, ),
    'web.fs.getFileAsync_$external_fun' : (_this, ) => _this.getFile(),
    'web.fs.FileSystemFileHandle_$external_class_instanceof' : (x) => x instanceof FileSystemFileHandle,
    'web.fs.FileSystemFileHandle_$external_class_get' : () => FileSystemFileHandle,
    'web.fs.create_$external_prop_setter' : (_this, v) => _this.create = v,
    'web.fs.create_$external_prop_setter_1' : (_this, v) => _this.create = v,
    'web.fs.kind_$external_prop_getter' : (_this) => _this.kind,
    'web.fs.FileSystemHandle_$external_class_instanceof' : (x) => x instanceof FileSystemHandle,
    'web.fs.FileSystemHandle_$external_class_get' : () => FileSystemHandle,
    'web.fs.Companion_$external_object_getInstance' : () => ({}),
    'web.fs.writeAsync_$external_fun' : (_this, p0) => _this.write(p0),
    'web.gl.Companion_$external_object_getInstance' : () => WebGL2RenderingContext,
    'web.gl.WebGL2RenderingContext_$external_class_instanceof' : (x) => x instanceof WebGL2RenderingContext,
    'web.gl.WebGL2RenderingContext_$external_class_get' : () => WebGL2RenderingContext,
    'web.gl.bindVertexArray_$external_fun' : (_this, p0) => _this.bindVertexArray(p0),
    'web.gl.createVertexArray_$external_fun' : (_this, ) => _this.createVertexArray(),
    'web.gl.vertexAttribIPointer_$external_fun' : (_this, p0, p1, p2, p3, p4) => _this.vertexAttribIPointer(p0, p1, p2, p3, p4),
    'web.gl.bufferData_$external_fun' : (_this, p0, p1, p2) => _this.bufferData(p0, p1, p2),
    'web.gl.bufferSubData_$external_fun' : (_this, p0, p1, p2) => _this.bufferSubData(p0, p1, p2),
    'web.gl.readPixels_$external_fun' : (_this, p0, p1, p2, p3, p4, p5, p6) => _this.readPixels(p0, p1, p2, p3, p4, p5, p6),
    'web.gl.texImage2D_$external_fun' : (_this, p0, p1, p2, p3, p4, p5, p6, p7, p8) => _this.texImage2D(p0, p1, p2, p3, p4, p5, p6, p7, p8),
    'web.gl.texImage2D_$external_fun_1' : (_this, p0, p1, p2, p3, p4, p5, p6, p7, p8) => _this.texImage2D(p0, p1, p2, p3, p4, p5, p6, p7, p8),
    'web.gl.texSubImage2D_$external_fun' : (_this, p0, p1, p2, p3, p4, p5, p6, p7, p8) => _this.texSubImage2D(p0, p1, p2, p3, p4, p5, p6, p7, p8),
    'web.gl.texSubImage2D_$external_fun_1' : (_this, p0, p1, p2, p3, p4, p5, p6, p7, p8) => _this.texSubImage2D(p0, p1, p2, p3, p4, p5, p6, p7, p8),
    'web.gl.uniformMatrix4fv_$external_fun' : (_this, p0, p1, p2, p3, p4, isDefault0, isDefault1) => _this.uniformMatrix4fv(p0, p1, p2, isDefault0 ? undefined : p3, isDefault1 ? undefined : p4, ),
    'web.gl.WebGLBuffer_$external_class_instanceof' : (x) => x instanceof WebGLBuffer,
    'web.gl.WebGLBuffer_$external_class_get' : () => WebGLBuffer,
    'web.gl.alpha_$external_prop_setter' : (_this, v) => _this.alpha = v,
    'web.gl.WebGLFramebuffer_$external_class_instanceof' : (x) => x instanceof WebGLFramebuffer,
    'web.gl.WebGLFramebuffer_$external_class_get' : () => WebGLFramebuffer,
    'web.gl.WebGLProgram_$external_class_instanceof' : (x) => x instanceof WebGLProgram,
    'web.gl.WebGLProgram_$external_class_get' : () => WebGLProgram,
    'web.gl.activeTexture_$external_fun' : (_this, p0) => _this.activeTexture(p0),
    'web.gl.attachShader_$external_fun' : (_this, p0, p1) => _this.attachShader(p0, p1),
    'web.gl.bindBuffer_$external_fun' : (_this, p0, p1) => _this.bindBuffer(p0, p1),
    'web.gl.bindFramebuffer_$external_fun' : (_this, p0, p1) => _this.bindFramebuffer(p0, p1),
    'web.gl.bindTexture_$external_fun' : (_this, p0, p1) => _this.bindTexture(p0, p1),
    'web.gl.blendFunc_$external_fun' : (_this, p0, p1) => _this.blendFunc(p0, p1),
    'web.gl.clear_$external_fun' : (_this, p0) => _this.clear(p0),
    'web.gl.clearColor_$external_fun' : (_this, p0, p1, p2, p3) => _this.clearColor(p0, p1, p2, p3),
    'web.gl.compileShader_$external_fun' : (_this, p0) => _this.compileShader(p0),
    'web.gl.createBuffer_$external_fun' : (_this, ) => _this.createBuffer(),
    'web.gl.createProgram_$external_fun' : (_this, ) => _this.createProgram(),
    'web.gl.createShader_$external_fun' : (_this, p0) => _this.createShader(p0),
    'web.gl.createTexture_$external_fun' : (_this, ) => _this.createTexture(),
    'web.gl.deleteShader_$external_fun' : (_this, p0) => _this.deleteShader(p0),
    'web.gl.deleteTexture_$external_fun' : (_this, p0) => _this.deleteTexture(p0),
    'web.gl.depthFunc_$external_fun' : (_this, p0) => _this.depthFunc(p0),
    'web.gl.depthMask_$external_fun' : (_this, p0) => _this.depthMask(p0),
    'web.gl.detachShader_$external_fun' : (_this, p0, p1) => _this.detachShader(p0, p1),
    'web.gl.disable_$external_fun' : (_this, p0) => _this.disable(p0),
    'web.gl.drawArrays_$external_fun' : (_this, p0, p1, p2) => _this.drawArrays(p0, p1, p2),
    'web.gl.enable_$external_fun' : (_this, p0) => _this.enable(p0),
    'web.gl.enableVertexAttribArray_$external_fun' : (_this, p0) => _this.enableVertexAttribArray(p0),
    'web.gl.generateMipmap_$external_fun' : (_this, p0) => _this.generateMipmap(p0),
    'web.gl.getProgramInfoLog_$external_fun' : (_this, p0) => _this.getProgramInfoLog(p0),
    'web.gl.getProgramParameter_$external_fun' : (_this, p0, p1) => _this.getProgramParameter(p0, p1),
    'web.gl.getShaderInfoLog_$external_fun' : (_this, p0) => _this.getShaderInfoLog(p0),
    'web.gl.getShaderParameter_$external_fun' : (_this, p0, p1) => _this.getShaderParameter(p0, p1),
    'web.gl.getUniformLocation_$external_fun' : (_this, p0, p1) => _this.getUniformLocation(p0, p1),
    'web.gl.linkProgram_$external_fun' : (_this, p0) => _this.linkProgram(p0),
    'web.gl.pixelStorei_$external_fun' : (_this, p0, p1) => _this.pixelStorei(p0, p1),
    'web.gl.scissor_$external_fun' : (_this, p0, p1, p2, p3) => _this.scissor(p0, p1, p2, p3),
    'web.gl.shaderSource_$external_fun' : (_this, p0, p1) => _this.shaderSource(p0, p1),
    'web.gl.texParameteri_$external_fun' : (_this, p0, p1, p2) => _this.texParameteri(p0, p1, p2),
    'web.gl.uniform1i_$external_fun' : (_this, p0, p1) => _this.uniform1i(p0, p1),
    'web.gl.useProgram_$external_fun' : (_this, p0) => _this.useProgram(p0),
    'web.gl.vertexAttribPointer_$external_fun' : (_this, p0, p1, p2, p3, p4, p5) => _this.vertexAttribPointer(p0, p1, p2, p3, p4, p5),
    'web.gl.viewport_$external_fun' : (_this, p0, p1, p2, p3) => _this.viewport(p0, p1, p2, p3),
    'web.gl.WebGLShader_$external_class_instanceof' : (x) => x instanceof WebGLShader,
    'web.gl.WebGLShader_$external_class_get' : () => WebGLShader,
    'web.gl.WebGLTexture_$external_class_instanceof' : (x) => x instanceof WebGLTexture,
    'web.gl.WebGLTexture_$external_class_get' : () => WebGLTexture,
    'web.gl.WebGLUniformLocation_$external_class_instanceof' : (x) => x instanceof WebGLUniformLocation,
    'web.gl.WebGLUniformLocation_$external_class_get' : () => WebGLUniformLocation,
    'web.gl.WebGLVertexArrayObject_$external_class_instanceof' : (x) => x instanceof WebGLVertexArrayObject,
    'web.gl.WebGLVertexArrayObject_$external_class_get' : () => WebGLVertexArrayObject,
    'web.html.getContext_$external_fun' : (_this, p0, p1, isDefault0) => _this.getContext(p0, isDefault0 ? undefined : p1, ),
    'web.navigator.navigator_$external_prop_getter' : () => navigator,
    'web.storage.storage_$external_prop_getter' : (_this) => _this.storage,
    'web.storage.getDirectoryAsync_$external_fun' : (_this, ) => _this.getDirectory(),
    'net.perfectdreams.harmony.wasm.copyArrayBufferToLinearMemory' : (memory, src, dst) => new Uint8Array(memory.buffer, dst, src.byteLength).set(new Uint8Array(src)),
    'net.perfectdreams.harmony.wasm.createArrayBufferFromLinearMemory' : (memory, src, size) => new Uint8Array(memory.buffer, src, size).slice().buffer,
    'net.perfectdreams.harmony.wasm.createFloat32ArrayFromLinearMemory' : (memory, src, size) => new Float32Array(memory.buffer, src, size).slice()
}

const StringConstantsProxy = new Proxy({}, {
  get(_, prop) { return prop; }
});

export { wasmTag as __TAG };

export const importObject = {
    js_code,
    intrinsics: {
        memory: new WebAssembly.Memory({ initial: 0 }),
        tag: wasmTag
    },
    "'": StringConstantsProxy,
    'wasm:js-string': d2FzbTpqcy1zdHJpbmc,
};
    
function isControlledAction(arg:any):arg is IControlledAction{
    return arg.key && arg.setKey;
}

export {
    isControlledAction
}
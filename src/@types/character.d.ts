declare interface ICharacter{
    name:string;
    skills:IClassAction[];
    sliceW:number;
    sliceH:number;
    img:HTMLImageElement;
    gapx:number = 208;
    gapy:number = 70;
    frames:Map<string, IFrameMapValue>;
}
type IFrameMapValue = {
    delay: number;
    posy: number;
    max: number;
}
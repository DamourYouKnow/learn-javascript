namespace Utils {
    export function replace(
        target: string,
        findStr: string,
        replaceStr: string
    ): string {
        return target.split(findStr).join(replaceStr);
    }
}

export default Utils;
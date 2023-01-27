//This function takes homongous string - e.g.  Content of post with base64 images
//And divides it into parts max X characters in a part
const charactersCountInPart = 4000000
export const divideConent = (content: string): string[] => {
    const partials: string[] = []
    const trimPart = () => {
        if(!content.length) return
        if(content.length < charactersCountInPart) {
            partials.push(content)
            return 
        }
        partials.push(content.slice(0, charactersCountInPart))
        content = content.slice(charactersCountInPart)
        trimPart()
    }
    trimPart()
    return partials
}
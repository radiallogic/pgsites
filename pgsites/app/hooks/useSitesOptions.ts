

export type Option = {label: string, value: any}

async function useSiteOption(){


    const response = await fetch('api\sites');
    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }
    console.log(response);

    const json = await response.json()
    
    let output = []
    for(let i=0; i < json.length; i++ ){
        output.push({label: json[i].name, value: json[i].value})
    }

    return output;
}   


export default useSiteOption
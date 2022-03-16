import { Pipe, PipeTransform} from '@angular/core';


@Pipe({
    name: 'append'
})

export class AppendPipe implements PipeTransform{

    transform(value: any, appendText: any){
        return value+appendText;
    }

}

@Pipe({
    name:'filter'
})
export class FilterPipe implements PipeTransform{
    transform(value: any,field:any, filtervalue:any)
    {
        if(value && value.length >0)
        {
            return value.filter((x: { [x: string]: any; }) => x[field] == filtervalue);
        }
        else{
            return[];
        }

    }
    
}
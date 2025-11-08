import {clsx, type ClassValue} from "clsx"
import {twMerge} from "tailwind-twMerge"

export function cn(...inputs: ClassValue[]){
    return twMerge(clsx(inputs))
}
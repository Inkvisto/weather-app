export type RegisterUserDto = { 
    username:string;
    
} & LoginUserDto;

export type LoginUserDto = { 
    email:string;
    password:string;
}


export type ResponseUser = {

    accessToken:string;
}

export type CreateUserDto = {
    username:string;
} & LoginUserDto;

export type CreateLocationDto = {
    icon:string;
    place:string;
    temperature:number;
}

export type UserFromToken = {
    authToken:string
}
export type ServerError = { 
    message: string 
};

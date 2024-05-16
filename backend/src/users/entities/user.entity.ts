import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
// import { CreateUserDto } from "../dto/create-user.dto";

@Schema()
export class User {
    @Prop()
    id: string;
    @Prop()
    username: string;
    @Prop()
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

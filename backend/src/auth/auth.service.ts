import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private userModel: Model<User>,
        private readonly jwtService: JwtService,
    ) {}

    // async login(username: string, pwd: string) 
    // {
    //     const user = this.validateUser(username, pwd);
    //     const playload = {username: user.username};
    // }

    async validateUser(username: string, pwd: string) 
    {
        const user = await this.userModel.findOne({username: username, password: pwd}).exec();
        
        
        if(user){
            const accessToken = this.jwtService.sign({username: user.username,password: user.password},{secret: 'mirack'});
            return {accessToken,user};
        }
        
        return null;
    }
}

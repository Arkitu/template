// Check the sequelize doc: typescript for more informations : https://sequelize.org/docs/v6/other-topics/typescript/

import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    NonAttribute
} from "sequelize";
import { Channel } from "./channel.js";


export const initArgs = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
};

export class Portal extends Model<InferAttributes<Portal>, InferCreationAttributes<Portal>> {
    declare id: CreationOptional<number>;
    declare Channels: NonAttribute<Channel[]>;

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
        this.belongsToMany(db.models.Channel, { through: "PortalChannels" });
    }
}

export function initModel() {
    Portal.init(initArgs, {
        sequelize: db,
        modelName: 'Portal'
    });
    console.log(`Initialized model ${Portal.name}`);
}
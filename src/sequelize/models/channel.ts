// Check the sequelize doc: typescript for more informations : https://sequelize.org/docs/v6/other-topics/typescript/

import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    NonAttribute
} from "sequelize";
import { Portal } from "./portal.js";


export const initArgs = {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    }
};

export class Channel extends Model<InferAttributes<Channel>, InferCreationAttributes<Channel>> {
    declare id: string;
    declare Portals: NonAttribute<Portal[]>

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
        this.belongsToMany(db.models.Portal, { through: "PortalChannels" });
    }
}

export function initModel() {
    Channel.init(initArgs, {
        sequelize: db,
        modelName: 'Channel'
    });
    console.log(`Initialized model ${Channel.name}`);
}
import { MFileParams } from "../../models/File";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
  UpdateDateColumn,
} from "typeorm";

/**
 * @author domutala
 */
@Entity({ name: "file" })
export default class File extends BaseEntity {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  params!: MFileParams;

  @Column({ type: "datetime" })
  @CreateDateColumn()
  createdAt!: Date;

  @Column({ type: "datetime" })
  @UpdateDateColumn()
  updatedAt!: Date;
}

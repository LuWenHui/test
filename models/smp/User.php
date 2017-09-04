<?php

namespace app\models\smp;

use Yii;

/**
 * This is the model class for table "dmms_users".
 *
 * @property integer $user_id
 * @property string $mobile
 * @property string $auth_key
 * @property string $password
 * @property string $email
 * @property string $real_name
 * @property integer $sex
 * @property string $position
 * @property integer $create_time
 * @property integer $create_id
 * @property integer $status
 */
class User extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'dmms_users';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['sex', 'create_time', 'create_id', 'status'], 'integer'],
            [['mobile'], 'string', 'max' => 20],
            [['auth_key', 'password'], 'string', 'max' => 200],
            [['email'], 'string', 'max' => 100],
            [['real_name'], 'string', 'max' => 300],
            [['position'], 'string', 'max' => 45],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'user_id' => '用户ID',
            'mobile' => '手机',
            'auth_key' => '认证值',
            'password' => '密码',
            'email' => '邮箱',
            'real_name' => '真实姓名',
            'sex' => '性别1男2女',
            'position' => '职位',
            'create_time' => '创建时间',
            'create_id' => '创建者',
            'status' => '状态',
        ];
    }
}

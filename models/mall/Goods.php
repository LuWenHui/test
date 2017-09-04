<?php

namespace app\models\mall;

use Yii;

/**
 * This is the model class for table "mall_goods".
 *
 * @property string $id
 * @property string $name
 * @property string $number
 * @property integer $category_id
 * @property integer $market_price
 * @property integer $profit
 * @property integer $member_price
 * @property integer $enter_price
 * @property string $header_img
 * @property string $description
 * @property integer $stock
 * @property integer $fake_amount
 * @property integer $point
 * @property integer $point_enable
 * @property integer $is_online
 * @property integer $creator_id
 * @property integer $create_time
 * @property integer $update_id
 * @property integer $update_time
 * @property string $unit
 * @property string $merchant_id
 * @property integer $is_perfect
 * @property string $browse
 * @property integer $start_time
 * @property integer $expire_time
 * @property integer $rush_price
 * @property integer $rush_sku_id
 * @property integer $rush_stock
 * @property integer $postage
 * @property integer $presale
 */
class Goods extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'mall_goods';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['category_id', 'market_price', 'profit', 'member_price', 'enter_price', 'stock', 'fake_amount', 'point', 'point_enable', 'is_online', 'creator_id', 'create_time', 'update_id', 'update_time', 'merchant_id', 'is_perfect', 'browse', 'start_time', 'expire_time', 'rush_price', 'rush_sku_id', 'rush_stock', 'postage', 'presale'], 'integer'],
            [['description'], 'required'],
            [['description'], 'string'],
            [['name', 'number', 'unit'], 'string', 'max' => 255],
            [['header_img'], 'string', 'max' => 200],
        ];
    }

    public function scenarios()
    {
        return parent::scenarios(); // TODO: Change the autogenerated stub
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => '商品id',
            'name' => '商品名称',
            'number' => '商品货号',
            'category_id' => '分类',
            'market_price' => '市场销售价格(单位:分)',
            'profit' => '利润',
            'member_price' => '会员价格(单位:分)',
            'enter_price' => '进货价(单位:分)',
            'header_img' => '首图冗余字段',
            'description' => '详细描述',
            'stock' => '库存数量',
            'fake_amount' => '自定义销量',
            'point' => '积分',
            'point_enable' => '积分可用',
            'is_online' => '是否上架(1上架，0下架)',
            'creator_id' => '商品创建者',
            'create_time' => '商品创建时间',
            'update_id' => '商品变更者',
            'update_time' => '商品变更时间',
            'unit' => '商品规格',
            'merchant_id' => '商户id',
            'is_perfect' => '是否为精选1为精选0为否',
            'browse' => '浏览量',
            'start_time' => '开始时间',
            'expire_time' => '失效时间',
            'rush_price' => '抢购价格',
            'rush_sku_id' => '抢购默认skuId',
            'rush_stock' => '抢购数量',
            'postage' => '邮费',
            'presale' => '预售量',
        ];
    }
}

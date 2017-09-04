<?php
/**
 * Created by PhpStorm.
 * User: luwenhui
 * Date: 2017/7/4
 * Time: 下午6:12
 */

namespace app\controllers;



use app\models\mall\Goods;
use yii\data\Pagination;
use yii\web\Controller;

class MessageController extends Controller
{
//    public $layout = false;

    public function actionDatePicker()
    {
        $model = Goods::findOne('10001904');
        return $this->render('date-picker', compact('model'));
    }

    public function actionActiveForm()
    {
        $model = Goods::findOne('10001904');
        return $this->render('active-form', compact('model'));
    }

    public function actionPage()
    {
        $model = Goods::find()->all();
        // 创建一个 DB 查询来获得所有
        $query = Goods::find();

        // 得到总数（但是还没有从数据库取数据）
        $count = $query->count();

        // 使用总数来创建一个分页对象
        $pagination = new Pagination(['totalCount' => $count]);

        // 使用分页对象来填充 limit 子句并取得文章数据
        $articles = $query->offset($pagination->offset)
            ->limit($pagination->limit)
            ->all();

        return $this->render('page.php', compact('model', 'count', 'pagination'));
    }

    public function actionForm()
    {
        $model = Goods::findOne(10001902);
        return $this->render('form', compact('model'));
    }

}
<?php

/**
 * Created by PhpStorm.
 * User: luwenhui
 * Date: 2017/7/6
 * Time: 上午10:08
 */
?>

<?= \yii\jui\DatePicker::widget([
    'model' => $model,
    'attribute' => 'create_time',
    'clientOptions' => [
        'dataFormat' => 'Y-m-d H:i:s'
    ]
]);

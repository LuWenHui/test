<?php
/**
 * Created by PhpStorm.
 * User: luwenhui
 * Date: 2017/7/7
 * Time: 上午10:22
 */
use yii\helpers\Html;
use yii\widgets\LinkPager;
?>

<?= Html::tag('p', Html::encode($count), ['class' => 'username']) ?>

<?= Html::button('Press me!', ['class' => 'teaser']) ?>
<?= Html::submitButton('Submit', ['class' => 'submit']) ?>
<?= Html::resetButton('Reset', ['class' => 'reset']) ?>


<?= Html::radio('agree', true, ['label' => 'I agree']); ?>

<?= Html::checkbox('agree', true, ['label' => 'I agree']); ?>


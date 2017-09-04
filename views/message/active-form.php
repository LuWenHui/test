<?php
/**
 * Created by PhpStorm.
 * User: luwenhui
 * Date: 2017/7/6
 * Time: 上午10:34
 */

$form = \yii\bootstrap\ActiveForm::begin(['id' => 'login-form']); ?>

<?= $form->field($model, 'id'); ?>
<?= $form->field($model, 'name'); ?>


    <div class="form-group">
        <div class="col-lg-offset-1 col-lg-11">
            <?= \yii\helpers\Html::submitButton('Login', ['class' => 'btn btn-primary']) ?>
        </div>
    </div>

<div class="form-group">
    <?= \yii\bootstrap\Html::submitButton('Login') ?>
</div>

<?php \yii\bootstrap\ActiveForm::end(); ?>
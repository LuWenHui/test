<div class="box box-default">
    <div class="box-body">
        <?php
        $form = \yii\bootstrap\ActiveForm::begin([
            'enableClientValidation' => false,
            'options' => ['class' => 'horizontal'],
            'fieldConfig' => [
                'template' => "{label}<div class=\"col-sm-5\">{input}</div>",
                'labelOptions' => ['class' => 'col-lg-3 control-label'],
            ],
        ]);

        echo $form->errorSummary($model);
        ?>
        <table class="table table-striped table-bordered table-hover">
            <tr>
                <td><?= $form->field($model, 'id')->textInput(['value' => $model->id, 'readonly' => true]) ?></td>
            </tr>
            <tr>
                <td><?= $form->field($model, 'name')->textInput(['value' => $model->name, 'readonly' => true]) ?></td>
            </tr>
            <tr>
                <td><?= $form->field($model, 'rush_price')->textInput(['value' => ($model->rush_price) / 100]) ?></td>
            </tr>
            <tr>
                <td><?= $form->field($model, 'rush_stock')->textInput(['value' => $model->rush_stock ]) ?></td>
            </tr>
            <tr>
                <td>
                    <?= $form->field($model, 'expire_time')->widget(\kartik\datetime\DateTimePicker::classname(), [
                        'options' => ['placeholder' => ''],
                        'pluginOptions' => [
                            'autoclose' => true,
                            'format' => 'yyyy-mm-dd HH:ii:ss',
                            'todayHighlight' => true
                        ],
                        'value' => $model->start_time ? date('Y-m-d',$model->start_time) : "",
                    ]);
                    ?>
                </td>
            </tr>
            <tr>
                <td>
                    <?= $form->field($model, 'start_time', [
                        'inputOptions' => [
                            'class' => 'form-control',
                            'onclick' => 'WdatePicker();',
                            'value' => $model->start_time ? date('Y-m-d',$model->start_time) : ""
                        ]
                    ])?>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="form-group field-expire_time">
                        <label class="col-lg-3 control-label" for="expire_time">选择时间段</label>
                        <div class="col-sm-5">
                            <select name="expire_time">
                                <option value="1" selected>0——24</option>
                            </select>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
        <?= \yii\helpers\Html::submitButton($model->isNewRecord ? '添加' : "修改", ['class' => 'btn btn-primary', 'name' => 'submit-button']); ?>
        <?php \yii\bootstrap\ActiveForm::end(); ?>
    </div>
</div>
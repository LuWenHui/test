<?php
use yii\helpers\Html;

?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script type="text/javascript" src="/static/dist/js/jquery.min.js"></script>
    <script type="text/javascript" src="/static/admin-lte/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/static/admin-lte/dist/js/app.min.js"></script>
    <link href="/static/admin-lte/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="/static/admin-lte/dist/css/AdminLTE.min.css" rel="stylesheet">
    <link href="/static/admin-lte/dist/css/skins/skin-black.min.css" rel="stylesheet">
    <?= Html::csrfMetaTags() ?>
    <title>梦想壹购后台</title>
    <?php $this->head() ?>
</head>
<body class="hold-transition login-page">
<div class="login-box">
    <div class="login-logo">
        <strong>哈哈哈</strong>后台
    </div>
    <div class="login-box-body">
        <p class="login-box-msg">登录平台进行您的工作</p>

        <form action="<?= \yii\helpers\Url::toRoute(['site/login']) ?>" method="post">
            <?= Html::hiddenInput(Yii::$app->request->csrfParam, Yii::$app->request->csrfToken) ?>
            <div class="form-group has-feedback">
                <input type="text" class="form-control" name="LoginForm[username]" placeholder="用户名">
                <span class="glyphicon glyphicon-user form-control-feedback"></span>
            </div>
            <div class="form-group has-feedback">
                <input type="password" class="form-control" name="LoginForm[password]" placeholder="密码">
                <span class="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
            <div class="row">
                <div class="col-xs-8">
                    <div class="checkbox icheck">
                        <label>
                            <input type="checkbox"> 记住我
                        </label>
                    </div>
                </div>
                <div class="col-xs-4">
                    <button type="submit" class="btn btn-primary btn-block btn-flat">登录</button>
                </div>
            </div>
        </form>
        <a href="#">忘记密码?</a><br>
    </div>
</div>
</body>
</html>
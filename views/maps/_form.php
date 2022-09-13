<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\MapPoi $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="map-poi-form">


    <?php $form = ActiveForm::begin(); ?>
    <div class="container">
    <div id="location">

    </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col">
                <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>
            </div>
            <div class="col">
                <?= $form->field($model, 'latitude')->textInput(['maxlength' => true]) ?>
            </div>
            <div class="col">
                <?= $form->field($model, 'longitude')->textInput(['maxlength' => true]) ?>
            </div>
            <div class="form-group">
                <br>
                <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
            </div>
        </div>
        <?php ActiveForm::end(); ?>

    </div>
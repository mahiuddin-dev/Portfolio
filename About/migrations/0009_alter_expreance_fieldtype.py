# Generated by Django 3.2 on 2021-06-10 11:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('About', '0008_auto_20210610_1741'),
    ]

    operations = [
        migrations.AlterField(
            model_name='expreance',
            name='fieldtype',
            field=models.CharField(choices=[('0', 'Present'), ('1', 'End date')], default=0, max_length=1),
        ),
    ]
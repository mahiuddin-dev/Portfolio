# Generated by Django 3.2 on 2021-06-10 09:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('About', '0002_authorperonal_shortdesc'),
    ]

    operations = [
        migrations.CreateModel(
            name='Boxes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Number', models.IntegerField()),
                ('FlineText', models.CharField(max_length=50)),
                ('LlineText', models.CharField(max_length=50)),
            ],
        ),
    ]
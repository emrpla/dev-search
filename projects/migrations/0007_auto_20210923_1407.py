# Generated by Django 3.2.5 on 2021-09-23 11:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_auto_20210831_1430'),
        ('projects', '0006_auto_20210921_1718'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='project',
            options={'ordering': ['-vote_ratio', 'vote_total', 'title']},
        ),
        migrations.AlterUniqueTogether(
            name='review',
            unique_together={('owner', 'project')},
        ),
    ]
